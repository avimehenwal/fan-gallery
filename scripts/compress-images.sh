#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 20 - Sep - 2020
# PURPOSE     : image compression optimization
# FILENAME    : compress-images.sh
#
# Compress images from lossless png format to lossy webp compression

if  [ $# -eq 0 ]; then
  echo "ERROR:: Please provide an absolute/relative path to images directory"
  exit 1
fi
echo `pwd`
echo `dirname $0`
echo $0

APT_DEPENDENCIES=(cwebp)
QUALITY=100
IP_DIR=$1
OUT_DIR="webp"
REL_OUT_DIR="$IP_DIR/$OUT_DIR"

if [ ! -d $REL_OUT_DIR ]; then
  mkdir --verbose "$REL_OUT_DIR"
fi

for file in $(find $IP_DIR -type f -name '*.png')
do
  file_name=$(basename ${file%.png})
  OUT_FILE="$REL_OUT_DIR/$file_name.webp"
  # echo -e "$file -> $file_name : $OUT_FILE"
  cwebp -preset drawing \
    -q $QUALITY -lossless -progress -short \
    "$file" -o "$OUT_FILE"
done

# END
