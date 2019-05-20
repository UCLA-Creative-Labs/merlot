#!/usr/bin/env bash
set -e

source ./scripts/node.sh

dev() {
	gatsby develop

	wait
}

dev
