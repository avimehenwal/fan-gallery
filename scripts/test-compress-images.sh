#!/usr/bin/env bats

# if  [ $# -eq 0 ]; then
#   exit 1
# fi

SOURCE_FILE="./scripts/compress-images.sh"
# SOURCE_FILE="$(dirname $0)/compress-images.sh"
source $SOURCE_FILE ./assets/animes/blackLagoon
# source $SOURCE_FILE $1

FILE_COUNT_INP_DIR=$(find $IP_DIR -type f -name '*.png' | wc --lines)
FILE_COUNT_OUT_DIR=$(find $REL_OUT_DIR -type f -name '*.webp' | wc --lines)

@test "test if number of web files generated is same as source png files" {
  [ $FILE_COUNT_INP_DIR -eq $FILE_COUNT_OUT_DIR ]
}
