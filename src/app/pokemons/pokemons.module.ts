import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PokemonListByTypeComponent } from './pokemon-list-by-type/pokemon-list-by-type.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MatCardModule } from '@angular/material/card';
import { PokemonFavoriteComponent } from './pokemon-favorite/pokemon-favorite.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { PokemonDetailPageComponent } from './pokemon-detail-page/pokemon-detail-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonAddCommentComponent } from './pokemon-add-comment/pokemon-add-comment.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonListByTypeComponent,
    PokemonDetailComponent,
    PokemonFavoriteComponent,
    MyFavoritesComponent,
    PokemonDetailPageComponent,
    PokemonAddCommentComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: 'pokemon-list',
        component: PokemonListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'pokemon-my-favorites',
        component: MyFavoritesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'pokemon-list-by-type/:id',
        component: PokemonListByTypeComponent,
      },
      {
        path: 'pokemon-details/:id',
        component: PokemonDetailPageComponent,
      },
    ]),
  ],
})
export class PokemonsModule {}
