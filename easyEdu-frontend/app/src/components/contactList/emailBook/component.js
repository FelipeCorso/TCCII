define([
    '../../../config/namespace',
    './directives/emailBook'
], function (namespace,emailBook) {
    'use strict';
    angular.module(namespace + '.components.contacts.emailBook', [namespace + '.contacts'])
    /**
     * Turn into <contact-list-email-book/>
     */
        .directive('contactListEmailBook', emailBook);
});