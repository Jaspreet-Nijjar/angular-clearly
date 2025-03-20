import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FOOTER_ICONS, FOOTER_LINKS } from '../../constants/footer-links';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  footerLinks = FOOTER_LINKS;
  footerIcons = FOOTER_ICONS;
}
