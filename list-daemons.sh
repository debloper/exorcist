#!/bin/sh

# Description string identifier
desc="Description="
fout="daemons.json"

# Create file to save output to
touch $fout

# Initiate JSON structure
echo "{" > $fout

# Iterate over the systemd units
units=(/lib/systemd/system/*)
for file in "${units[@]}"
do
  if [[ -f $file ]]; then
    # Do not prepend comma for the first item
    if [ ${units[0]} != $file ]; then
      echo "," >> $fout
    fi
    # Capture file name
    daemon="${file##*/}"
    # Extract daemon description
    description=`grep $desc $file | cut -d'=' -f 2`
    # Format a readable (and parsable) output
    echo -n "\"$daemon\": \"$description\"" >> $fout
  fi
done

# End JSON structure
echo -e "\n}" >> $fout

# Notify user about completion of the process
echo "List of daemons on this system are written to ./daemons.json"
