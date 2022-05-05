import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "Testserver", content: "Just a test" },
    { type: "blueprint", name: "Citlalli test", content: "Just another test" },
  ];

  onServerAdded(severData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: severData.serverName,
      content: severData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
