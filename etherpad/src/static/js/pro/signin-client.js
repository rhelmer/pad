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
$(document).ready(function() {
    $('#signInButton, #createbutton').click(
        function (event) {
            event.preventDefault();
            var form = $(this).parents('form');
            navigator.id.getVerifiedEmail(
                function (assertion) {
                    if (assertion) {
                        $('input[name=assertion]', form).attr('value', assertion);
                        form.submit();
                    }
                });
        });
    $('.one-time-alert').each(function () {
        var id = $(this).attr('id'),
            div_id = 'one-time-alter-' + id;
        if (! localStorage.getItem(div_id)) {
            $('#' + id).show('slow');
            localStorage.setItem(div_id, true);
        }
    });
});