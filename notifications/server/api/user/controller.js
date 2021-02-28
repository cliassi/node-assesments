class Controller {
  static async getUser(context) {
    return {
      name: 'John Doe',
      role: 'admin',
      actions: ['profile', 'settings'],
    };
  }
}

module.exports = Controller;
