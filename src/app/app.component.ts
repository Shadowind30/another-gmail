import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public inboxes = [
    { title: 'Primary', url: '/folder/primary', icon: 'mail-unread', count: 3, color: 'medium' },
    { title: 'Social', url: '/folder/social', icon: 'people', count: 25, color: 'secondary' },
    { title: 'Promotions', url: '/folder/promotions', icon: 'pricetag', count: 16, color: 'success' },
  ];

  public recentLabels = [
    { title: 'Important mails', url: '/folder/custom', icon: 'bookmark' },
  ];

  public labels = [
    { title: 'Starred', url: '/folder/starred', icon: 'star', count: 0 },
    { title: 'Snoozed', url: '/folder/snoozed', icon: 'time', count: 0 },
    { title: 'Important', url: '/folder/important', icon: 'arrow-up-circle', count: 97 },
    { title: 'Sent', url: '/folder/sent', icon: 'send', count: 0 },
    { title: 'Scheduled', url: '/folder/scheduled', icon: 'timer', count: 0 },
    { title: 'Outbox', url: '/folder/outbox', icon: 'arrow-forward-circle', count: 0 },
    { title: 'Drafts', url: '/folder/drafts', icon: 'document', count: 2 },
    { title: 'All mail', url: '/folder/mail', icon: 'mail', count: 170 },
    { title: 'Spam', url: '/folder/spam', icon: 'alert-circle', count: 1 },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash', count: 0 },
    { title: 'Important mails', url: '/folder/custom', icon: 'bookmark', count: 0 },
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
