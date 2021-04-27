<?php

/*
 * This file is part of justoverclock/flarum-ext-guestengagement.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\Guestengagement;

use Flarum\Extend;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\Serializing;


return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__.'/resources/locale'),
    (new Extend\Settings)
        ->serializeToForum('xPost', 'justoverclock-guestengagement.coordinates'),
    (new Extend\Settings)
        ->serializeToForum('timeOut', 'justoverclock-guestengagement.timeout'),
    (new Extend\Settings)
        ->serializeToForum('tchange', 'justoverclock-guestengagement.textchange'),
    (new Extend\Settings)
        ->serializeToForum('BoxTitle', 'justoverclock-guestengagement.BoxTitleChange'),
    (new Extend\Settings())->serializeToForum('hideHomeBox', 'justoverclock-guestengagement.hide.homebox', 'boolval', true),

];
