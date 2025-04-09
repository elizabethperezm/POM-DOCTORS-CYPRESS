import DashboardPage from "../pages/dashboard.page";

describe('Header Test', () => {
    beforeEach(() => {
        DashboardPage.open();
    })

    it('Verify the header title', () => {
        DashboardPage.header.verifyTitle();
    });

    it ('Verify the logout button', () => {
        DashboardPage.header.verifyLogoutButton();
    })
})