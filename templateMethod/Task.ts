import AuditTrail from "./AuditTrail";

export default abstract class Task {
  private auditTrail: AuditTrail;

  // default constructor
  public constructor() {
    this.auditTrail = new AuditTrail;
  }

  public execute(): void {
    this.auditTrail.record();
    this.doExecute();
  }

  protected abstract doExecute(): void
}