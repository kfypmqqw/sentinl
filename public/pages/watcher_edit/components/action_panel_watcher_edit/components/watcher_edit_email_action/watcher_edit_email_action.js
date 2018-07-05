import template from './watcher_edit_email_action.html';

import {cloneDeep} from 'lodash';

class WatcherEditEmailAction {
  constructor($scope) {
    this.$scope = $scope;
    this.actionName = this.actionName || this.$scope.actionName;
    this.actionSettings = this.actionSettings || this.$scope.actionSettings;
    this.actionDelete = this.actionDelete || this.$scope.actionDelete;
    this.aceOptions = this.aceOptions || this.$scope.aceOptions;

    this.type = 'email';
    this.status = {
      isOpen: false,
    };
    this.actionSettings.name = this.actionName;
    this.priority = {
      selected: this.actionSettings.email.priority,
      options: ['low', 'medium', 'high'],
      handleChange: () => {
        this.actionSettings.email.priority = this.priority.selected;
      },
    };
  }

  deleteAction() {
    this.actionDelete({origActionName: this.actionName});
  }
}

function watcherEditEmailAction() {
  return {
    template,
    restrict: 'E',
    scope: {
      actionName: '@',
      actionSettings: '=',
      actionDelete: '&',
      aceOptions: '&',
    },
    controller:  WatcherEditEmailAction,
    controllerAs: 'watcherEditEmailAction',
    bindToController: {
      actionName: '@',
      actionSettings: '=',
      actionDelete: '&',
      aceOptions: '&',
    },
  };
}

export default watcherEditEmailAction;
