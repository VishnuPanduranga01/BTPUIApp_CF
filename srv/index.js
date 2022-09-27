const express = require("express");
const hdb = require("hdb");
const xsenv = require("@sap/xsenv");
const { JWTStrategy } = require("@sap/xssec");
const passport = require("passport");

const xsenvObj = xsenv.getServices( { hana: { tag : 'database'}});