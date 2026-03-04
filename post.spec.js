const { test, expect } = require('@playwright/test');

test('IPS自動投稿', async ({ page }) => {
  // note.comログイン
  await page.goto('https://note.com/login');
  await page.fill('input[name="user[email]"]', process.env.NOTE_EMAIL);
  await page.fill('input[name="user[password]"]', process.env.NOTE_PASSWORD);
  await page.click('button:has-text("ログイン")');
  await page.waitForURL('**/home');
  
  // 新規投稿
  await page.click('[data-testid="fab"]');
  await page.fill('[data-testid="note-title"]', 'IPS解析第1節 | 鈴木悠起也');
  await page.fill('[data-testid="note-editor"]', 
    `## 調和公理
H(x)=limφ→∞Σ(多様性×関係性)

情報創発理論の物理法則。#鈴木悠起也解読`);
  await page.click('[data-testid="publish-button"]');
  
  console.log('✅ IPS自動投稿完了！');
});
