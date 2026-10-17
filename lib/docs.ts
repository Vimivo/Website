import fs from 'node:fs';
import path from 'node:path';

export interface DocMetadata {
  slug: string;
  title: string;
  category: string;
  order: number;
  description: string;
  sourceFile: string;
}

export interface DocArticle extends DocMetadata {
  content: string;
}

const DOCS_DIR = path.join(process.cwd(), 'content/docs');

function parseFrontmatter(raw: string): { data: DocMetadata; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return {
      data: {
        slug: '',
        title: 'Untitled',
        category: 'General',
        order: 999,
        description: '',
        sourceFile: '',
      },
      content: raw,
    };
  }

  const yamlBlock = match[1];
  const content = match[2];
  const data: Record<string, string | number> = {};

  for (const line of yamlBlock.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (key === 'order') {
        data[key] = parseInt(value, 10) || 999;
      } else {
        data[key] = value;
      }
    }
  }

  return {
    data: {
      slug: (data.slug as string) || '',
      title: (data.title as string) || 'Untitled',
      category: (data.category as string) || 'General',
      order: (data.order as number) || 999,
      description: (data.description as string) || '',
      sourceFile: (data.sourceFile as string) || '',
    },
    content,
  };
}

export function getAllDocs(): DocMetadata[] {
  if (!fs.existsSync(DOCS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(DOCS_DIR).filter((f) => f.endsWith('.md'));
  const docs: DocMetadata[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(DOCS_DIR, file), 'utf8');
    const { data } = parseFrontmatter(raw);
    if (data.slug) {
      docs.push(data);
    }
  }

  return docs.sort((a, b) => a.order - b.order);
}

export function getDocBySlug(slug: string): DocArticle | null {
  const filePath = path.join(DOCS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = parseFrontmatter(raw);
  return { ...data, content };
}

export function getDocCategories(): { category: string; docs: DocMetadata[] }[] {
  const allDocs = getAllDocs();
  const categoryMap = new Map<string, DocMetadata[]>();

  const categoryOrder = [
    'Getting Started',
    'Features & Media',
    'Organization',
    'Platforms & Systems',
    'Security & Trust',
    'Releases',
    'Community',
  ];

  for (const doc of allDocs) {
    const list = categoryMap.get(doc.category) || [];
    list.push(doc);
    categoryMap.set(doc.category, list);
  }

  const result: { category: string; docs: DocMetadata[] }[] = [];

  for (const cat of categoryOrder) {
    if (categoryMap.has(cat)) {
      result.push({ category: cat, docs: categoryMap.get(cat)! });
      categoryMap.delete(cat);
    }
  }

  for (const [cat, docs] of categoryMap.entries()) {
    result.push({ category: cat, docs });
  }

  return result;
}
