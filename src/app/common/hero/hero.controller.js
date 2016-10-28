class HeroController {
  constructor($scope) {
    'ngInject';
    $scope.$on('search', (e, query) => {
      this.name = query;
    });
  }
}

export default HeroController;
