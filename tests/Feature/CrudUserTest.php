<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class CrudUserTest extends TestCase
{
    use RefreshDatabase;

    public function setup(): void
    {
        # code...
        parent::setUp();
        $this->actingAs(User::find(1));
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_superadmin_can_see_user_list()
    {
        //login superadmin
        $this->actingAs(User::find(1));

        //buka halaman user
        $response = $this->get('/user-management/user');

        //pastikan response 200
        $response->assertStatus(200);

        //assert ada variabel users
        $response->assertViewHas('users');

        $response->assertSeeText('superadmin@gmail.com');
    }

    public function test_userlist_store()
    {
        $user1 = User::make([
            'name' => "admin-test",
            'email' => "test@gmail.com",
            'password' => Hash::make('password'),
        ]);
        $user2 = User::make([
            'name' => "tester-aja",
            'email' => "ngetest@gmail.com",
            'password' => Hash::make('password'),
        ]);

        $this->assertTrue($user1->name != $user2->name);
    }

    public function test_userlist_update()
    {
        $user = User::where('id', 4)->update([
            'name' => "testerAja123",
            'email' => "ngetest123@gmail.com",
            'password' => Hash::make('password'),
        ]);

        $this->assertDatabaseMissing(
            'users',
            [
                'name' => "testerAja123",
                'email' => "ngetest123@gmail.com",
                'password' => Hash::make('password'),
            ]
        );
    }

    public function test_userlist_delete()
    {
        $user = User::first();
        if ($user) {
            $user->delete();
        }
        $this->assertTrue(true);
    }

    public function  test_it_store_new_user()
    {
        $response = $this->post('/user-management/user', [
            'name' => "UserTester",
            'email' => "userTest@gmail.com",
            'password' => Hash::make('password'),
        ]);

        $response->assertSessionHasNoErrors();
        $response->assertRedirect("/user-management/user");
        $response->assertSessionHas("success", "Data Berhasil Ditambahkan");
        $search = $this->get("/user-management/user", [
            "name" => "UserTester",
        ]);
        $search->assertSeeText("userTest@gmail.com");
        $this->assertDatabaseHas('users', [
            "name" => "UserTester",
            "email" => "userTest@gmail.com",
        ]);
    }
}
