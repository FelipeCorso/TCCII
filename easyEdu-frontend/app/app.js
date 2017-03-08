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
    , 'src/components/editor/layouts/genericLayout/component'
    , 'src/components/editor/layouts/memoryGame/component'
    , 'src/components/editor/layouts/puzzle/component'
    , 'src/components/editor/layouts/answerOptions/component'
/**
 * ...and modules.
 */
    , 'src/modules/core/module'
    , 'src/modules/navigation/module'
    , 'src/modules/app/module'
    , 'src/modules/todo/module'
    , 'src/modules/dashboard/module'
    , 'src/modules/contactList/module'
    , 'src/modules/editor/module'
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
        , namespace + '.editor'
        , namespace + '.editor.gallery'
        , namespace + '.editor.my-gallery'

    /**
     * App components
     */
        , namespace + '.components.todo.pending'
        , namespace + '.components.contacts.phoneBook'
        , namespace + '.components.editor.layouts.genericLayout'
        , namespace + '.components.editor.layouts.memoryGame'
        , namespace + '.components.editor.layouts.puzzle'
        , namespace + '.components.editor.layouts.answerOptions'
    ]);
    return {
        name: namespace
    };

});