import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss'
  ]

})
export class FooterComponent {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faYoutube = faYoutube;
  faChevronRight = faChevronRight;
}
