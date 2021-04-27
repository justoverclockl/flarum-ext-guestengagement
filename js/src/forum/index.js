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
import SignUpModal from 'flarum/components/SignUpModal';
import Button from 'flarum/components/Button';

app.initializers.add('justoverclock/flarum-ext-guestengagement', () => {
  extend(IndexPage.prototype, 'view', function (vdom) {
    if (!app.session.user)
      if (vdom.children && vdom.children.splice) {
      /*  Imposta un timeout per far scomparire automaticamente il div*/
        setTimeout(function () {
          $('#wrapperengage').fadeOut().empty();
        }, app.forum.attribute('timeOut'));
        const insert = m(
          'div',
          { id: 'wrapperengage' },
          m('div', { id: 'engagebox' }, [
            m('p', [
              m('strong', app.translator.trans('flarum-ext-guestengagement.forum.hello')),
              m('br'),
              m('br'),
              app.translator.trans('flarum-ext-guestengagement.forum.whenucreate'),
              m('br'),
              app.translator.trans('flarum-ext-guestengagement.forum.uwillreceive'),
            ]),
            m(
              'button',
              { className: '.SplitDropdown-button Button Button--primary hasIcon', type: 'button', onclick: () => app.modal.show(SignUpModal) },
              app.translator.trans('core.forum.header.sign_up_link')
            )
          ])
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
              m('strong', app.forum.attribute('BoxTitle')),
              m('br'),
              m('br'),
              app.forum.attribute('tchange'),
            ]),
            m(
              'button',
              { className: '.SplitDropdown-button Button Button--primary hasIcon', type: 'button', onclick: () => app.modal.show(SignUpModal) },
              app.translator.trans('core.forum.header.sign_up_link')
            )
          )
        );
        vdom.children.splice(app.forum.attribute('xPost'), 0, insert);
      }
  });
});
