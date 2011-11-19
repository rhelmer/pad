/**
 * Copyright 2009 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import("funhtml.*");
import("stringutils");
import("stringutils.*");
import("email.sendEmail");
import("cache_utils.syncedWithCache");

import("etherpad.utils.*");
import("etherpad.sessions.getSession");

import("etherpad.pro.domains");
import("etherpad.pro.pro_accounts");
import("etherpad.pro.pro_utils");

jimport("java.lang.System.out.println");

function onRequest() {
  if (!getSession().oldFormData) {
    getSession().oldFormData = {};
  }
  return false;  // not handled yet.
}

function _errorDiv() {
  var m = getSession().proAccountControlError;
  delete getSession().proAccountControlError;
  if (m) {
    return DIV({className: "error"}, m);
  }
  return "";
}

function _redirectError(m) {
  getSession().proAccountControlError = m;
  response.redirect(request.path);
}


function render_main_get() {
  response.redirect('/');
}

function render_sign_in_get() {
  response.redirect('/');
}


