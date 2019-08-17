#!/bin/sh

SRC_FILE="node_modules/vue-cli-plugin-p11n/lib/demo/service.js"
TMP_FILE="node_modules/vue-cli-plugin-p11n/lib/demo/_service.js"

mv $SRC_FILE $TMP_FILE
sed -e "s/'serve', args/'build', { ...args, dest: '.\/demo\/dist' }/" $TMP_FILE > $SRC_FILE
yarn demo
mv -f $TMP_FILE $SRC_FILE
