class HeroController {
  constructor($scope) {
    'ngInject';
    this.name = 'Hero';
    $scope.$on('search', (e, query) => {
      this.name = query;
    });
  }
}

export default HeroController;
