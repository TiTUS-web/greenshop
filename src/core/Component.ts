export class Component {
  $el: HTMLElement | null;

  constructor(id: string) {
    this.$el = document.getElementById(id);
  }

  protected initComponent(): void {}

  protected hideComponent(): void {
    this.$el?.classList.add('component_hide');
    this.isHideComponent();
  }

  protected showComponent(): void {
    this.$el?.classList.remove('component_hide');
    this.isShowComponent();
  }

  protected isHideComponent() {}

  protected isShowComponent() {}
}
