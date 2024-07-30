import { Component } from '@angular/core';
import {TextZoneComponent} from "./text-zone/text-zone.component";
import {ToolBarComponent} from "./tool-bar/tool-bar.component";

@Component({
  selector: 'turbEdit-editor',
  standalone: true,
  imports: [
    TextZoneComponent,
    ToolBarComponent
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

}
