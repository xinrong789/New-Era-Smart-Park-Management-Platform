import { get } from "../utils/http/request"

export function getEnergyConsumptionData() {
  return get("/energyConsumption")
}
