## NOMO TS Task

This repository contains Login testing scripts for mobile  using WebdriverIO and Cucumber.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Generating Reports](#generating-reports)
-
## Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)
- Yarn (optional, but recommended)

## Installation

Clone this repository and navigate to the project directory:

```bash
git clone <repository-url>
cd e2e-testing


## Install the dependencies:
npm install



## Running Tests
npm run wdio-all

## Run Android Tests
npm run wdio-android @mobile 

** for login
npm run wdio-android @mobile @login

## Run IOS Tests
npm run wdio-ios

## Generate Allure Report
npm run generate-report
npm run allure-open
npm run allure-clear
