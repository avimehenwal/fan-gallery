#!/usr/bin/env bats

# if  [ $# -eq 0 ]; then
#   exit 1
# fi

# FIXME remove spaces from filename Screenshot from 2020-09-20 22-30-35

SOURCE_FILE="./scripts/compress-images.sh"
# SOURCE_FILE="$(dirname $0)/compress-images.sh"
source $SOURCE_FILE ./assets/animes/blade-of-the-immortal-2019
# source $SOURCE_FILE $1

FILE_COUNT_INP_DIR=$(find $IP_DIR -type f -name '*.png' | wc --lines)
FILE_COUNT_OUT_DIR=$(find $REL_OUT_DIR -type f -name '*.webp' | wc --lines)

@test "test if number of web files generated is same as source png files" {
  [ $FILE_COUNT_INP_DIR -eq $FILE_COUNT_OUT_DIR ]
}
