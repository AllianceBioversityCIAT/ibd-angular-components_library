import { Component, Input, OnInit } from '@angular/core';
import { TermsOrPolicies } from '../../models/terms-or-policies.interface';

@Component({
  selector: 'ibdc-terms-or-policies',
  templateUrl: './terms-or-policies.component.html',
  styleUrls: ['./terms-or-policies.component.scss']
})
export class TermsOrPoliciesComponent implements OnInit {
  @Input() options:TermsOrPolicies;
  constructor() { }

  ngOnInit(): void {
  }

}
