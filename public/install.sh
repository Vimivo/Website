#!/usr/bin/env bash
# ==============================================================================
#  Vimivo — Every Sound. Every Frame.
#  Official Universal Command-Line Installer
#
#  Designed & Developed by TA Shanto
#  Website: https://tashanto.com
#  Repository: https://github.com/Vimivo/Player
# ==============================================================================

set -euo pipefail

# Colors
CYAN='\033[0;36m'
GREEN='\033[0;32m'
AMBER='\033[0;33m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m' # No Color

print_banner() {
    cat << "EOF"
======================================================================
  __      ___           _             
  \ \    / (_)         (_)            
   \ \  / / _ _ __ ___  ___   _____   
    \ \/ / | | '_ ` _ \| \ \ / / _ \  
     \  /  | | | | | | | |\ V / (_) | 
      \/   |_|_| |_| |_|_| \_/ \___/  

  Every Sound. Every Frame.
  Crafted by TA Shanto • https://tashanto.com
======================================================================
EOF
}

echo -e "${CYAN}"
print_banner
echo -e "${NC}"

OS="$(uname -s)"
ARCH="$(uname -m)"

echo -e "${BOLD}Detecting system environment...${NC}"
echo -e "  Operating System: ${GREEN}${OS}${NC}"
echo -e "  Architecture:     ${GREEN}${ARCH}${NC}"
echo ""

case "${OS}" in
    Darwin)
        echo -e "${CYAN}==>${NC} ${BOLD}Detected macOS (${ARCH})${NC}"
        DOWNLOAD_URL="https://vimivo.tashanto.com/api/download/macos"
        TARGET_FILE="Vimivo.dmg"

        echo -e "${CYAN}==>${NC} Downloading official macOS universal disk image..."
        if command -v curl >/dev/null 2>&1; then
            curl -fSL "${DOWNLOAD_URL}" -o "${TARGET_FILE}" --progress-bar
        elif command -v wget >/dev/null 2>&1; then
            wget -q --show-progress -O "${TARGET_FILE}" "${DOWNLOAD_URL}"
        else
            echo -e "${RED}Error: neither curl nor wget is available.${NC}"
            exit 1
        fi

        echo -e "${GREEN}✓ Successfully downloaded ${TARGET_FILE}!${NC}"
        echo ""
        echo -e "${BOLD}Opening disk image for installation...${NC}"
        open "${TARGET_FILE}"
        echo -e "${GREEN}==> Drag the Vimivo icon into Applications to finish installation.${NC}"
        ;;

    Linux)
        echo -e "${CYAN}==>${NC} ${BOLD}Detected Linux (${ARCH})${NC}"
        DOWNLOAD_URL="https://vimivo.tashanto.com/api/download/linux"
        TARGET_FILE="vimivo.deb"

        echo -e "${CYAN}==>${NC} Downloading official Linux package..."
        if command -v curl >/dev/null 2>&1; then
            curl -fSL "${DOWNLOAD_URL}" -o "${TARGET_FILE}" --progress-bar
        elif command -v wget >/dev/null 2>&1; then
            wget -q --show-progress -O "${TARGET_FILE}" "${DOWNLOAD_URL}"
        else
            echo -e "${RED}Error: neither curl nor wget is available.${NC}"
            exit 1
        fi

        echo -e "${GREEN}✓ Successfully downloaded ${TARGET_FILE}!${NC}"
        echo ""
        if command -v dpkg >/dev/null 2>&1; then
            echo -e "${AMBER}To install on Ubuntu/Debian, run:${NC}"
            echo -e "  ${BOLD}sudo dpkg -i ${TARGET_FILE}${NC}"
        else
            echo -e "Package saved to $(pwd)/${TARGET_FILE}"
        fi
        ;;

    MINGW*|MSYS*|CYGWIN*)
        echo -e "${CYAN}==>${NC} ${BOLD}Detected Windows environment${NC}"
        DOWNLOAD_URL="https://vimivo.tashanto.com/api/download/windows"
        TARGET_FILE="Vimivo-Setup.exe"

        echo -e "${CYAN}==>${NC} Downloading official Windows installer..."
        curl -fSL "${DOWNLOAD_URL}" -o "${TARGET_FILE}" --progress-bar
        echo -e "${GREEN}✓ Successfully downloaded ${TARGET_FILE}!${NC}"
        echo -e "Starting installer..."
        ./"${TARGET_FILE}"
        ;;

    *)
        echo -e "${RED}Unsupported operating system: ${OS}${NC}"
        echo -e "Please visit ${CYAN}https://vimivo.tashanto.com/download${NC} for manual binary downloads."
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}======================================================================${NC}"
echo -e "  Vimivo is 100% Free & Open Source under the MIT License."
echo -e "  Designed & Developed by ${BOLD}TA Shanto${NC} (${CYAN}https://tashanto.com${NC})"
echo -e "  Support Development:   ${CYAN}https://www.supportkori.com/iamtashanto${NC}"
echo -e "${GREEN}======================================================================${NC}"
