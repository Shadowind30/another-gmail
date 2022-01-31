import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public inboxes = [
    { title: 'Primary', url: '/folder/primary', icon: 'mail-unread' },
    { title: 'Social', url: '/folder/social', icon: 'people' },
    { title: 'Promotions', url: '/folder/promotions', icon: 'pricetag' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  public recentLabels = [
    { title: 'Important mails', url: '/folder/custom', icon: 'bookmark' },
  ];

  public labels = [
    { title: 'Starred', url: '/folder/starred', icon: 'star' },
    { title: 'Snoozed', url: '/folder/snoozed', icon: 'time' },
    { title: 'Important', url: '/folder/important', icon: 'arrow-up-circle' },
    { title: 'Sent', url: '/folder/sent', icon: 'send' },
    { title: 'Scheduled', url: '/folder/scheduled', icon: 'timer' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'arrow-forward-circle' },
    { title: 'Drafts', url: '/folder/drafts', icon: 'document' },
    { title: 'All mail', url: '/folder/mail', icon: 'mail' },
    { title: 'Spam', url: '/folder/spam', icon: 'alert-circle' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Important mails', url: '/folder/custom', icon: 'bookmark' },
  ];

  public gapps = [
    { title: 'Calendar', url: 'https://calendar.google.com', icon: 'calendar' },
    { title: 'Contacts', url: 'https://contacts.google.com', icon: 'person-circle' },
  ];

  public options = [
    { title: 'Settings', url: '/folder/settings', icon: 'settings' },
    { title: 'Help & feedback', url: '/folder/help', icon: 'help-circle' },
  ];
  constructor() {}
}
