/*
 * This file is part of justoverclock/flarum-ext-guestengagement.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */


import app from 'flarum/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

app.initializers.add('justoverclock-guestengagement', () => {
  app.extensionData.for('justoverclock-guestengagement').registerSetting(
    {
      setting: 'justoverclock-guestengagement.coordinates',
      name: 'afterXpost',
      type: 'number',
      label: 'Display box After X post (accept number, default is 0)',
    },
    15
  );
});
app.extensionData.for('justoverclock-guestengagement').registerSetting(
  {
    setting: 'justoverclock-guestengagement.timeout',
    name: 'timeout',
    type: 'number',
    label: 'Auto hide box after X seconds (use millisecond, e.g for 5 sec use 5000)',
  },
  14
);
