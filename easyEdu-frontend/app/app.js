define([
/**
 * References first
 */
    'src/config/namespace'
    , 'src/resources/views'
/**
 * Then load all components...
 */
    , 'src/components/todo/pending/component'
    , 'src/components/contactList/phoneBook/component'
    , 'src/components/editor/layouts/answer-options/component'
    , 'src/components/editor/layouts/generic-layout/component'
    , 'src/components/editor/layouts/memory-game/component'
    , 'src/components/editor/layouts/multiple-uploads/component'
    , 'src/components/editor/layouts/puzzle/component'
    /**
 * ...and modules.
 */
    , 'src/modules/core/module'
    , 'src/modules/navigation/module'
    , 'src/modules/app/module'
    , 'src/modules/todo/module'
    , 'src/modules/dashboard/module'
    , 'src/modules/contactList/module'
    , 'src/modules/game/module'
    , 'src/modules/editor/module'
    , 'src/modules/editor/activity/module'
    , 'src/modules/editor/activity/word/module'
    , 'src/modules/editor/gallery/module'
    , 'src/modules/editor/my-gallery/module'

], function (namespace) {
    'use strict';
    angular.module(namespace, [
        'ngRoute'
        , 'ui.router'
    /**
     * We need to load the resources before everything.
     */
        ,'resources.views'
    /**
     * App modules
     */

        , namespace + '.core'
        , namespace + '.app'
        , namespace + '.todo'
        , namespace + '.dashboard'
        , namespace + '.contacts'
        , namespace + '.game'
        , namespace + '.editor'
        , namespace + '.editor.activity'
        , namespace + '.editor.activity.word'
        , namespace + '.editor.gallery'
        , namespace + '.editor.my-gallery'

    /**
     * App components
     */
        , namespace + '.components.todo.pending'
        , namespace + '.components.contacts.phoneBook'
        , namespace + '.components.editor.layouts.answer-options'
        , namespace + '.components.editor.layouts.generic-layout'
        , namespace + '.components.editor.layouts.memory-game'
        , namespace + '.components.editor.layouts.multiple-uploads'
        , namespace + '.components.editor.layouts.puzzle'
    ]);
    return {
        name: namespace
    };

});