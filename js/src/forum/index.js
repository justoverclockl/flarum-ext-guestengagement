/*
 * This file is part of justoverclock/flarum-ext-guestengagement.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */



import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import PostStream from 'flarum/components/PostStream';

app.initializers.add('justoverclock/flarum-ext-guestengagement', () => {
  extend(IndexPage.prototype, 'view', function (vdom) {
    if (!app.session.user)
      if (vdom.children && vdom.children.splice) {
        setTimeout(function () {
          $('#wrapperengage').fadeOut().empty();
        }, app.forum.attribute('timeOut'));
        const insert = m(
          'div',
          { id: 'wrapperengage' },
          m(
            'div',
            { id: 'engagebox' },
            m('p', [
              m('strong', app.translator.trans('flarum-ext-guestengagement.forum.hello')),
              m('br'),
              m('br'),
              app.translator.trans('flarum-ext-guestengagement.forum.whenucreate'),
              m('br'),
              app.translator.trans('flarum-ext-guestengagement.forum.uwillreceive'),
            ])
          )
        );
        vdom.children.splice(1, 0, insert);
      }
  });
  extend(PostStream.prototype, 'view', function (vdom) {
    if (!app.session.user)
      if (vdom.children && vdom.children.splice) {
        const insert = m(
          'div',
          { id: 'wrapperengageps' },
          m(
            'div',
            { id: 'engageboxps' },
            m('p', [
              m('strong', app.translator.trans('flarum-ext-guestengagement.forum.hellops')),
              m('br'),
              app.translator.trans('flarum-ext-guestengagement.forum.whenucreateps'),
              m('br'),
              app.translator.trans('flarum-ext-guestengagement.forum.uwillreceiveps'),
            ])
          )
        );
        vdom.children.splice(app.forum.attribute('xPost'), 0, insert);
      }
  });
});
