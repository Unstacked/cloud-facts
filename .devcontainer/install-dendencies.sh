#!/bin/bash

pwd

WORKSPACE_DIR=$(git rev-parse --show-toplevel)

cd $WORKSPACE_DIR/cdk
npm install

cd $WORKSPACE_DIR/frontend
npm install

cd $WORKSPACE_DIR
[ -d ".venv" ] || python3 -m venv .venv
source .venv/bin/activate

cd $WORKSPACE_DIR/generator
pip install -r requirements.txt