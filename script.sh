#!/bin/sh

# Restore cursor and move to new line when terminated
trap 'tput cnorm; echo "About to exit"' EXIT
trap 'exit 127' HUP INT TERM

# Make text cursor invisible
# tput civis
# Save cursor position
tput sc
while true; do
    for status in 2 10 23 45 60 79 88 95 100; do
        
        result=""
        count=0
        while [ $count -lt $((status/2)) ]; do
            result="${result}#"
            count=$((count + 1))
        done

         while [ $count -lt 50 ]; do
            result="${result} "
            count=$((count + 1))
        done        

        if [ "$status" -lt 10 ]; then
            result="${result} "
            result="${result} "
        elif [ "$status" != 100 ]; then 
            result="${result} "
        fi
        tput rc
        
        printf "\e[36m%s %s%% Completed.\e[0m"  "$result" "$status"
        sleep 0.2
    done
    tput rc
done
