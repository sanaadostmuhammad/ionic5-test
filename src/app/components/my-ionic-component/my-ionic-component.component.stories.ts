import { CommonModule } from "@angular/common";
import { Meta } from "@angular/platform-browser";
import { IonicModule } from "@ionic/angular";
import { moduleMetadata, Story } from "@storybook/angular";
import { MyIonicComponentComponent } from "./my-ionic-component.component";

export default {
  title: 'Example/MyIonicComponentComponent',
  component: MyIonicComponentComponent,
  decorators: [
    moduleMetadata({
      declarations: [MyIonicComponentComponent],
      imports: [CommonModule, IonicModule.forRoot()],

    }),
  ],
};

const Template: Story<MyIonicComponentComponent> = (args: MyIonicComponentComponent) => ({
  component: MyIonicComponentComponent,
  props: args,
});

export const IonComp = Template.bind({});
IonComp.args = {
  primary: true,
  label: 'Button',
};
