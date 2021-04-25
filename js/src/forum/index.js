import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import PostStream from 'flarum/components/PostStream'

app.initializers.add('justoverclock/flarum-ext-guestengagement', () => {
  extend(IndexPage.prototype, 'view', function (vdom) {
    if (!app.session.user)
      if (vdom.children && vdom.children.splice) {
        setTimeout(function() {
          $("#wrapperengage").fadeOut().empty();
        }, 17000);
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
});

