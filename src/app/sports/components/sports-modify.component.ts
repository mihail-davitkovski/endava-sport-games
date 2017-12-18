import { Input, Output, Component, EventEmitter , OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Sport } from "../model/sport.model";

enum Mode
{
  DISPLAY = 'display',
  NEW = 'new',
  MODIFY = 'modify'
}

@Component({
  selector: 'sports-modify',
  templateUrl: './templates/sports-modify.component.html',
  styleUrls: ['./sports-modify.component.css']
})
export class SportsModifyComponent implements OnInit {
  @Input()
  mode: Mode;
  
  @Output()
  onSportAdded: EventEmitter<Sport>;

  @Output()
  onSportModified: EventEmitter<Sport>;

  @Output()
  onSportDeleted: EventEmitter<Sport>;

  currentSport: Sport;

  message: string;
  isFormSubmitted: boolean;
  sportName: FormControl;
  description: FormControl;
  sportsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.mode = Mode.DISPLAY;
    this.sportName = new FormControl('', [
      Validators.required
    ]);

    this.description = new FormControl('', [
    ]);

    this.sportsForm = this.formBuilder.group({
      sportName: this.sportName,
      description: this.description
    });

    this.onSportAdded = new EventEmitter<Sport>();
    this.onSportModified = new EventEmitter<Sport>();
    this.onSportDeleted = new EventEmitter<Sport>();
  }

  ngOnInit() {
  }

  cancel()
  {
    this.mode = Mode.DISPLAY;
  }

  save(sport: Sport)
  {
    this.isFormSubmitted = true;
    if (this.sportsForm.valid) {
      this.mode = Mode.DISPLAY;
      if(sport.id)
      {
        this.onSportAdded.emit(sport);
      }
      else{
        this.onSportModified.emit(sport);
      }
    }
  }
}
