#!/usr/bin/env bash
# Source this script to assert that the current version of node matches .nvmrc
# and to include the local ./node_modules/.bin in the current path.

(( NODE_INCLUDED )) && return
NODE_INCLUDED=1

function check_node_version() {
  if [ ! -f ./.nvmrc ]; then
    echo "cannot find .nvmrc"
    exit 1
  fi

  # find user's version of node
  local CURRENT_VERSION=$(node --version 2> /dev/null || echo "none")
	# read in desired version from .nvmrc
  local DESIRED_VERSION=$(cat ./.nvmrc)

	# reconcile current and desired version
  if [ "$CURRENT_VERSION" != "$DESIRED_VERSION" ]; then
    echo "Incorrect node version (found $CURRENT_VERSION, expected $DESIRED_VERSION)"
    echo "You might want to run \`nvm use\`"
    exit 1
  fi
}

check_node_version
