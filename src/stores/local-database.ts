import { action, decorate, observable } from "mobx";
import { v4 as uuid } from "uuid";

import { ICategoryDto, ICostDto, ICreateCostDto } from "@/types/business";
import { ILocalDatabaseStore } from "@/types/stores";
import { Nullable } from "@/types/utils";

export class LocalDatabaseStore implements ILocalDatabaseStore {
  costs: ICostDto[] = [];
  categories: ICategoryDto[] = [];
  lastUpdatedAt: number = Date.now();

  constructor(
    storedValue: Nullable<{ costs: ICostDto[]; categories: ICategoryDto[] }>
  ) {
    if (storedValue) {
      this.costs = storedValue.costs;
      this.categories = storedValue.categories;
    }
  }

  addCategory = (displayName: string) => {
    this.categories.push({
      id: uuid(),
      displayName,
    });
    this.lastUpdatedAt = Date.now();
  };

  deleteCategory = (id: string) => {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === id
    );

    if (categoryIndex !== -1) {
      this.categories.splice(categoryIndex, 1);
      this.lastUpdatedAt = Date.now();
    }
  };

  createCost = (dto: ICreateCostDto) => {
    this.costs.push({
      id: uuid(),
      createdAt: Date.now(),
      ...dto,
    });
    this.lastUpdatedAt = Date.now();
  };

  deleteCost = (id: string) => {
    const costIndex = this.costs.findIndex((cost) => cost.id === id);

    if (costIndex !== -1) {
      this.costs.splice(costIndex, 1);
      this.lastUpdatedAt = Date.now();
    }
  };
}

decorate(LocalDatabaseStore, {
  costs: observable,
  categories: observable,
  lastUpdatedAt: observable,
  addCategory: action,
  deleteCategory: action,
  createCost: action,
  deleteCost: action,
});

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LocalDatabaseStore {}
