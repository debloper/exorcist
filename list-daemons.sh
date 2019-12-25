#!/bin/sh

# Description string identifier
desc="Description="

# Create file to save output to
touch list-daemons.txt

# Iterate over the systemd units
for file in /lib/systemd/system/*
do
  if [[ -f $file ]]; then
    # Capture file name
    daemon="${file##*/}"
    # Extract daemon description
    description=`grep $desc $file | cut -d'=' -f 2`
    # Format a readable (and parsable) output
    echo "$daemon: $description" >> list-daemons.txt
  fi
done

# Notify user about completion of the process
echo "List of daemons on this system are written to ./list-daemons.txt"
