#!/bin/bash

if [ "$#" -eq 0 ]; then
  echo "Error: No exercise directory specified." 1>&2
  exit 1
fi

if [ -d "exercises/$1" ]; then
  echo "Error: Exercise \"$1\" already exists." 1>&2
  exit 1
fi

exercise_name="$1"
exercise_path="exercises/$exercise_name"

mkdir $exercise_path
echo "package-lock=false" > $exercise_path/.npmrc
sed "s/template-exercise/$exercise_name/g" exercises/__template__/README.md > $exercise_path/README.md
