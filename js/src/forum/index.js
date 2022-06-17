/*
 * This file is part of justoverclock/flarum-ext-guestengagement.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';

import { extend, override } from 'flarum/common/extend';

import IndexPage from 'flarum/forum/components/IndexPage';
import PostStream from 'flarum/forum/components/PostStream';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import Button from 'flarum/common/components/Button';

app.initializers.add('justoverclock/flarum-ext-guestengagement', () => {
  extend(IndexPage.prototype, 'view', function (vdom) {

    const style = 'style="background: ' + app.forum.attribute('justoverclock-guestengagement.backgroundColor') + ';"'

    if (!app.session.user)
      if (app.forum.attribute('justoverclock-guestengagement.hideHomeBox') === true)
        if (vdom.children && vdom.children.splice) {
          /*  Imposta un timeout per far scomparire automaticamente il div*/
          setTimeout(function () {
            $('#wrapperengage').fadeOut().empty();
          }, app.forum.attribute('justoverclock-guestengagement.timeOut'));
          const insert = m(
            'div',
            { id: 'wrapperengage' },
            m('div', {
              id: 'engagebox',
              style: style
            }, [
              m('p', [
                m('strong', app.translator.trans('flarum-ext-guestengagement.forum.hello')),
                m('p'),
                app.translator.trans('flarum-ext-guestengagement.forum.whenucreate'),
                app.translator.trans('flarum-ext-guestengagement.forum.uwillreceive'),
              ]),
              m(
                'button',
                { className: '.SplitDropdown-button Button Button--primary hasIcon', type: 'button', onclick: () => app.modal.show(SignUpModal) },
                app.translator.trans('core.forum.header.sign_up_link')
              ),
            ])
          );
          vdom.children.splice(1, 0, insert);
        }
  });

  override(PostStream.prototype, 'view', function (originalView) {
    // If we're logged in or this feature is disabled, change nothing
    // about the PostStream
    if (app.session.user || app.forum.attribute('justoverclock-guestengagement.hidePostBox') !== true) {
      return originalView();
    }

    /**
     * Array of items inside the PostStream.
     *
     * @type {import('mithril').Children[]}
     */
    const postStreamItems = originalView().children;

    const engagementBox = (
      <div key="justoverclock-guestengagement" id="wrapperengageps">
        <div id="engageboxps" style>
          <p>
            <strong>{app.forum.attribute('justoverclock-guestengagement.BoxTitle')}</strong>
          </p>
          <p>{app.forum.attribute('justoverclock-guestengagement.tchange')}</p>
          <Button class="Button Button--primary" onclick={() => app.modal.show(SignUpModal)}>
            {app.translator.trans('flarum-ext-guestengagement.forum.signupbtn')}
          </Button>
        </div>
      </div>
    );

    const newItems = postStreamItems.reduce((items, currentItem) => {
      let itemList = [...items, currentItem];

      if (currentItem.attrs['data-index'] === (parseInt(app.forum.attribute('justoverclock-guestengagement.xPost')) || 0)) {
        itemList.push(engagementBox);
      }

      return itemList;
    }, []);

    return <div className="PostStream">{newItems}</div>;
  });
});