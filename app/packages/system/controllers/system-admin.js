'use strict';

// Index
exports.index = function(SystemPackage, req, res) {
  // Always use ExamplePackage.render()
  res.send(SystemPackage.render('admin/index', {
    packages: SystemPackage.getCleverCore().getInstance().exportable_packages_list
  }));
};