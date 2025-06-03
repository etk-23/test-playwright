import re
from playwright.sync_api import Page, expect


def test_example(page: Page) -> None:
    page.goto("http://127.0.0.1:5500/index.html")
    page.get_by_role("textbox", name="Username").click()
    page.get_by_role("textbox", name="Username").fill("admin")
    page.get_by_role("textbox", name="Username").press("Tab")
    page.get_by_role("textbox", name="Password").fill("1234")
    page.get_by_role("button", name="Login").click()
    page.locator("html").click()
