import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // encapsulation: ViewEncapsulation.None,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagraph") paragraph: ElementRef;

  // constructor() {
  //   console.log("Constructor call");
  // }

  // // If you want to react to any changes and then do something with the old values, like store them
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("onChanges call");
  //   console.log(changes);
  // }

  // ngOnInit(): void {
  //   console.log("ngOnInit call");
  //   // console.log(this.paragraph.nativeElement.textContent);

  //   // console.log(this.header.nativeElement.textContent);
  // }

  // // Runs on every little change, useful for changing something manually
  // ngDoCheck() {
  //   console.log("ngDoCheck call");
  // }

  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit call");
  //   // console.log(this.paragraph.nativeElement.textContent);
  // }

  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked call");
  // }

  // // You can check the value of an HTML element at this point because it is when renders
  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit call");
  //   // console.log(this.header.nativeElement.textContent);
  // }

  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked call");
  // }

  // ngOnDestroy() {
  //   console.log("ngOnDestroy call");
  // }
}
