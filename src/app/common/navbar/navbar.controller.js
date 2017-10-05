class NavbarController {
  constructor($rootScope) {
    'ngInject';
    this.handleSearch = () => {
      $rootScope.$broadcast('search', this.query);
    };
  }
}

export default NavbarController;
