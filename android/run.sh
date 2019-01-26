#!/bin/bash

./gradlew ${1:-installDevDebug} --stacktrace && adb shell am start -n com.fariswdev.old/host.exp.exponent.MainActivity
