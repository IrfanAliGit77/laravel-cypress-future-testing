<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Tests\TestCase;

class CrudRoleTest extends TestCase
{
    use RefreshDatabase;

    public function setup(): void
    {
        # code...
        parent::setUp();
        $this->actingAs(Role::find(1));
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_superadmin_can_see_role_list()
    {
        //login superadmin
        $this->actingAs(Role::find(1));

        //buka halaman user
        $response = $this->get('/role-and-permission/role');

        //pastikan response 200
        $response->assertStatus(200);

        //assert ada variabel users
        $response->assertViewHas('roles');

        $response->assertSeeText('superadmin@gmail.com');
    }

    // public function test_rolelist_store()
    // {
    //     $role1 = Role::make([
    //         'name' => "admin-test",
    //         'guard_name' => "web",
    //     ]);
    //     $role2 = User::make([
    //         'name' => "tester-aja",
    //         'guard_name' => "web",
    //     ]);

    //     $this->assertTrue($role1->name != $role2->name);
    // }

    // public function test_rolelist_update()
    // {
    //     $roles = Role::where('id', 4)->update([
    //         'name' => "tester-aja123",
    //         'guard_name' => "website",
    //     ]);

    //     $this->assertDatabaseMissing(
    //         'roles',
    //         [
    //             'name' => "tester-aja123",
    //             'guard_name' => "website",
    //         ]
    //     );
    // }

    // public function test_userlist_delete()
    // {
    //     $roles = Role::first();
    //     if ($roles) {
    //         $roles->delete();
    //     }
    //     $this->assertTrue(true);
    // }

    // public function  test_it_store_new_role()
    // {
    //     $response = $this->post('/role-and-permission/role', [
    //         'name' => "user-test",
    //         'guard_name' => "web",
    //     ]);

    //     $response->assertSessionHasNoErrors();
    //     $response->assertRedirect("/role-and-permission/role");
    //     $response->assertSessionHas("success", "Role Created Successfully");
    //     $search = $this->get("/role-and-permission/role", [
    //         "name" => "user-test",
    //     ]);
    //     $search->assertSeeText("web");
    //     $this->assertDatabaseHas('roles', [
    //         "name" => "user-test",
    //         "guard_name" => "web",
    //     ]);
    // }
}
