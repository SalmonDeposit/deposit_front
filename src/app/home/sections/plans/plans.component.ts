import {Component, OnInit} from '@angular/core';
import {PlanService} from "./plan.service";
import {Plan} from "../../classes/plan";
import {PlanFactory} from "../../classes/factories/plan.factory";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit{
  plans: Plan[]
  constructor(public service: PlanService) {
  }
  ngOnInit(): void {
    this.service.list().subscribe({
      next: res => {
        this.plans = this.hydratePlans(res.object)
      }
    })

  }
  private hydratePlans(plans: Plan[]){
    for (let i = 0; i < plans.length ; i++) {
      let realCost = 3.99;
      let description = PlanFactory.BasicDescription;
      switch (i) {
        case 1:
          realCost = 15.99;
          description = PlanFactory.StandardDescription
          break
        case 2:
          realCost = 30.99;
          description = PlanFactory.PremiumDescription
      }
      plans[i].realCost = realCost
      plans[i].description = description
    }
    plans.unshift(PlanFactory.GetFreemium())
    return plans;
  }

}
